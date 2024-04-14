"use client";
import React, { useState } from "react";
import useSWR, { mutate } from "swr";
import { IoTrashOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import ItemNotFound from "@/app/components/ItemNotFound";
import Input from "@/app/components/ui/Input";
import Pagination from "@/app/components/Pagination";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Page = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const { data, error, isLoading } = useSWR("/api/household", fetcher);
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<HouseholdMember | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

  const formatString = (str: string) => {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());
  };

  const handleDeleteMember = async (id: string) => {
    try {
      setButtonLoading(true);
      await axios.delete(`/api/household/${id}`);
      toast.success("Member deleted successfully");
      mutate("/api/household"); // This will refetch the data and update the state
    } catch (error) {
      toast.error("Error deleting member");
    } finally {
      setButtonLoading(false);
    }
  };

  const handleOpenModal = (member: HouseholdMember) => {
    setShowModal(true);
    setSelectedMember(member);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
      <Toaster />
      <Modal
        modalTitle="Are you sure?"
        primaryButton="Delete"
        color="red"
        modalMessage="This action is irreversible, are you sure you want to delete this member?"
        showModal={showModal}
        setShowModal={setShowModal}
        buttonLoading={buttonLoading}
        handleDeleteMember={handleDeleteMember}
        selectedMember={selectedMember}
      />
      <div className="mb-4">
        <Input
          id="Search"
          name="search"
          label="Search for a member:"
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-700 sm:rounded-lg">
                <table className="min-w-full divide-y divide-shade">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider"
                      >
                        Sex
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-sm font-bold text-shade uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {data
                      ?.filter(
                        (member: HouseholdMember) =>
                          member.firstName
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                          member.lastName
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                      )
                      .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage
                      )
                      .map((member: HouseholdMember) => (
                        <tr className="py-6" key={member.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                            {member.firstName} {member.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                            {formatString(member.sexCode)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">
                            {member.age} year(s)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-700 flex space-x-4 font-medium">
                            <p
                              onClick={() => handleOpenModal(member)}
                              className="cursor-pointer hover:scale-125 transition ease-in-out duration-300"
                            >
                              <IoTrashOutline />
                            </p>
                            <Link href={`/dashboard/members/${member.id}`}>
                              <p className="cursor-pointer hover:scale-125 transition ease-in-out duration-300">
                                <IoEyeOutline />
                              </p>
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="text-center">
              {isLoading && <p>Loading...</p>}
              {error && <ItemNotFound />}
            </div>
          </div>
        </div>
      </div>
      <Pagination currentPage={currentPage} handlePageChange={handlePageChange} totalPages={totalPages} />
    </div>
  );
};

export default Page;

"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import HeadingTwo from '@/components/typography/HeadingTwo';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contacts on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('Contact Entries')
        .select('unique_id, created_at, name, email, phone, message'); // Explicitly selecting columns

      if (error) {
        setError('Error fetching contacts');
        console.error('Error fetching contacts:', error.message);
      } else {
        console.log('Fetched contacts:', data); // Log the fetched data
        setContacts(data);
      }
      setLoading(false);
    };

    fetchContacts();
  }, []);


  // Delete contact function
  const handleDelete = async (unique_id) => {
    // Confirm deletion to avoid accidental deletes
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (!confirmDelete) return;

    try {
      const { error } = await supabase
        .from('Contact Entries')  // Make sure the table name matches exactly
        .delete()
        .eq('unique_id', unique_id);  // Delete the contact by id

      if (error) {
        console.error('Error deleting contact:', error.message);
        return;
      }

      // Update the UI by removing the deleted contact from the state
      setContacts(contacts.filter(contact => contact.unique_id !== unique_id));
    } catch (error) {
      console.error('Error during deletion:', error.message);
    }
  };

  if (loading) {
    return <div>Loading contacts...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='h-screen bg-white p-10 flex items-center justify-start flex-col'>
      {contacts.length === 0 ? (
        <div className="text-center">
          <img
            src="/img/sorry.png"  // Replace with the actual image path
            alt="No Entries"
            className="mx-auto w-64 h-64"
          />
          <p className="mt-4 text-2xl font-semibold text-gray-600 kanit-medium">Oops, there are no entries!</p>
        </div>
      ) : (
        <>
          <HeadingTwo title={"Contact Submissions"} />

          <table className="min-w-full divide-y divide-gray-200 mt-10">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-4 text-left text-sm font-semibold text-[#0f063f] uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-[#0f063f] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-[#0f063f] uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-[#0f063f] uppercase tracking-wider">
                  Email
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-[#0f063f] uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-[#0f063f] uppercase tracking-wider">
                  Message
                </th>
                <th className="px-4 py-4 text-left text-sm font-semibold text-[#0f063f] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
              {contacts.map((msg) => {
                const { unique_id, created_at, name, email, phone, message } = msg;
                return (
                  <tr key={unique_id}>
                    <td className="px-4 py-4 text-sm text-[#0f063f]">{unique_id}</td>
                    <td className="px-4 py-4 text-sm text-[#0f063f]">
                      {created_at ? new Date(created_at).toDateString() : 'Date not available'}
                    </td>
                    <td className="px-4 py-4 text-sm text-[#0f063f]">{name}</td>
                    <td className="px-4 py-4 text-sm text-[#0f063f]">{email}</td>
                    <td className="px-4 py-4 text-sm text-[#0f063f]">{phone}</td>
                    <td className="px-4 py-4 text-sm text-[#0f063f]">{message}</td>
                    <td className="px-4 py-4 text-sm text-[#0f063f]">
                      <button
                        onClick={() => handleDelete(unique_id)} // Call delete handler
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

          </table>
        </>
      )}
    </div>
  );
};

export default AdminContacts;

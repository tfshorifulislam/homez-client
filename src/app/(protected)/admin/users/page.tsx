'use client';

import { useEffect, useState } from "react";

type User = {
    _id: string;
    name: string;
    email: string;
    role: string;
    status?: string;
};

const UserPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/user`
                );

                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex h-60 items-center justify-center">
                <p className="text-lg font-medium text-gray-500">
                    Loading users...
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">
                        User Management
                    </h2>
                    <p className="text-sm text-slate-500">
                        Total Users: {users.length}
                    </p>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b bg-slate-50">
                            <th className="px-4 py-3 text-left font-semibold text-slate-700">
                                Name
                            </th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700">
                                Email
                            </th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700">
                                Role
                            </th>
                            <th className="px-4 py-3 text-left font-semibold text-slate-700">
                                Status
                            </th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-700">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user._id}
                                className="border-b transition hover:bg-slate-50"
                            >
                                <td className="px-4 py-4 font-medium text-slate-800">
                                    {user.name}
                                </td>

                                <td className="px-4 py-4 text-slate-600">
                                    {user.email}
                                </td>

                                <td className="px-4 py-4">
                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                                        {user.role}
                                    </span>
                                </td>

                                <td className="px-4 py-4">
                                    <span
                                        className={`rounded-full px-3 py-1 text-sm font-medium ${
                                            user.status === "blocked"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-green-100 text-green-700"
                                        }`}
                                    >
                                        {user.status ?? "Active"}
                                    </span>
                                </td>

                                <td className="px-4 py-4 text-center">
                                    <button
                                        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                                    >
                                        Block User
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {users.length === 0 && (
                    <div className="py-10 text-center text-slate-500">
                        No users found.
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserPage;
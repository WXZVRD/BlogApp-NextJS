'use client';

import {
    Badge,
    Button,
    Input, Separator
} from "@/shared/ui";
import { Globe, Github, Pencil, X, Check } from "lucide-react";
import { useState } from "react";
import {useAuth} from "@/shared/hooks/useAuth";
import {UserAvatar} from "@/feautures/user/userAvatar/ui/UserAvatar";
import {useUpdateUser} from "@/entities/user/model/useUpdateUser";

export default function ProfileUserMenu() {
    const { user } = useAuth()
    const [isEditing, setIsEditing] = useState(false);

    const [draftFirstName, setDraftFirstName] = useState('');
    const [draftLastName, setDraftLastName] = useState('');

    const { mutate: updateUserData } = useUpdateUser();

    const startEdit = () => {
        if (user?.first_name && user?.last_name) {
            setDraftFirstName(user?.first_name);
            setDraftLastName(user?.last_name);
        }
        setIsEditing(true);
    };

    const cancelEdit = () => {
        setIsEditing(false);
    };

    const saveEdit = () => {
        if (user) {
            setIsEditing(false);
            updateUserData({
                data: {
                    first_name: draftFirstName,
                    last_name: draftLastName
                },
                userId: user.id,
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-10 px-4 space-y-4 text-center">
            <UserAvatar fallback="NW"/>

            <div className="relative group">
                {!isEditing ? (
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        {user?.first_name} {user?.last_name}
                        <button
                            onClick={startEdit}
                            className="w-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <Pencil className="w-4 h-4 text-gray-500" />
                        </button>
                    </h1>
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex gap-2">
                            <Input
                                value={draftFirstName}
                                onChange={(e) => setDraftFirstName(e.target.value)}
                                placeholder="First name"
                                className="w-32 text-sm"
                            />
                            <Input
                                value={draftLastName}
                                onChange={(e) => setDraftLastName(e.target.value)}
                                placeholder="Last name"
                                className="w-32 text-sm"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button onClick={saveEdit} size="sm" variant="default">
                                <Check className="w-4 h-4 mr-1" /> Save
                            </Button>
                            <Button onClick={cancelEdit} size="sm" variant="outline">
                                <X className="w-4 h-4 mr-1" /> Cancel
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex gap-2 flex-wrap justify-center">

                {user?.provider === "local"
                 ? (
                        <Badge variant="secondary" className="gap-1 px-3 py-1.5 text-sm">
                            <Globe className="w-4 h-4" />
                            Locale
                        </Badge>

                    )
                : (
                        <Badge variant="secondary" className="gap-1 px-3 py-1.5 text-sm">
                            <Github className="w-4 h-4" />
                            GitHub
                        </Badge>
                    )}
            </div>

            <Separator className="max-w-[600px]"/>
        </div>
    );
}

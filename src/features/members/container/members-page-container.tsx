import React from "react";
import { MemberList } from "@/features/members/component/member-list";
import { InvitationForm } from "@/features/members/component/invitation-form";
import { MemberPermission } from "@/features/members/component/member-permission";
import { MemberEdit } from "@/features/members/component/member-edit";
import { MemberActivityLog } from "@/features/members/component/member-activity-log";

// 仮データ
const members = [
  { id: 1, name: "Alice", role: "Admin", status: "Active" },
  { id: 2, name: "Bob", role: "Member", status: "Invited" },
];
const logs = ["Alice updated profile", "Bob invited"];

export const MembersPageContainer = () => (
  <div className="space-y-8 p-6">
    <section>
      <h2 className="font-bold text-lg mb-2">Member List</h2>
      <MemberList members={members} />
    </section>
    <section>
      <h2 className="font-bold text-lg mb-2">Invite Member</h2>
      <InvitationForm />
    </section>
    <section>
      <h2 className="font-bold text-lg mb-2">Permission Management</h2>
      {members.map((m) => (
        <MemberPermission key={m.id} member={m} />
      ))}
    </section>
    <section>
      <h2 className="font-bold text-lg mb-2">Edit/Delete Member</h2>
      {members.map((m) => (
        <MemberEdit key={m.id} member={m} />
      ))}
    </section>
    <section>
      <h2 className="font-bold text-lg mb-2">Activity Log</h2>
      <MemberActivityLog logs={logs} />
    </section>
  </div>
);
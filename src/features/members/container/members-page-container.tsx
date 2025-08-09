import React from 'react';
import { InvitationForm } from '@/features/members/components/invitation-form';
import { MemberActivityLog } from '@/features/members/components/member-activity-log';
import { MemberTable } from '../components/member-table';

// 仮データ
const members = [
  { id: 1, name: 'Alice', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Bob', role: 'Member', status: 'Invited' },
];
const logs = ['Alice updated profile', 'Bob invited'];

export const MembersPageContainer = () => (
  <div className="w-full overflow-x-auto space-y-8 p-6">
    <section>
      <h2 className="font-bold text-lg mb-2">Member List</h2>
      <MemberTable members={members} onEdit={(id) => console.log('Edit', id)} onDelete={(id) => console.log('Delete', id)} />
    </section>
    <section>
      <h2 className="font-bold text-lg mb-2">Invite Member</h2>
      <InvitationForm />
    </section>
    <section>
      <h2 className="font-bold text-lg mb-2">Activity Log</h2>
      <MemberActivityLog logs={logs} />
    </section>
  </div>
);

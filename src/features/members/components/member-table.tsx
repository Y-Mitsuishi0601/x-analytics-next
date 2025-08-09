import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash } from 'lucide-react';
import { MemberEditModal } from './member-edit-modal';
import { DeleteConfirmationModal } from './delete-confirmation-modal';

export function MemberTable({ members, onEdit, onDelete }: { 
  members: any[]; 
  onEdit: (id: string, role?: string) => void; 
  onDelete: (id: string) => void; 
}) {
  const [isEditModalOpen, setEditModalOpen] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState(null);
  const [memberList, setMembers] = React.useState(members);
  const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [memberToDelete, setMemberToDelete] = React.useState<{ id: string } | null>(null);

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memberList.map((member) => (
            <TableRow key={member.id}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.role}</TableCell>
              <TableCell>{member.status}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setSelectedMember(member);
                    setEditModalOpen(true);
                  }}
                  variant="ghost"
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => {
                    setMemberToDelete(member);
                    setDeleteModalOpen(true);
                  }}
                  variant="ghost"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedMember && (
        <MemberEditModal
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          member={selectedMember}
          onSave={(id, updatedMember) => {
            onEdit(id, updatedMember.role);
            const updatedMembers = memberList.map((member) =>
              member.id === id ? { ...member, ...updatedMember } : member
            );
            setMembers(updatedMembers);
          }}
          members={members}
        />
      )}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={() => {
          if (memberToDelete) {
            onDelete(memberToDelete.id);
            setDeleteModalOpen(false);
          }
        }}
      />
    </div>
  );
}

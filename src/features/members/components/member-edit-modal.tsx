import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RoleDropdown } from './role-dropdown';

interface MemberEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: { id: string; name: string; role: string };
  onSave: (id: string, updatedMember: { name: string; role: string }) => void;
  members: Array<{ id: string; name: string; role: string }>;
}

export const MemberEditModal: React.FC<MemberEditModalProps> = ({ isOpen, onClose, member, onSave, members }) => {
  const [name, setName] = React.useState(member.name);
  const [tempRole, setTempRole] = React.useState(member.role);

  const handleSave = () => {
    onSave(member.id, { name, role: tempRole });
    // Update the member's name and role in the table row
    const updatedMembers = members.map((member) =>
      member.id === member.id ? { ...member, name, role: tempRole } : member
    );
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Member</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter member name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <RoleDropdown
              currentRole={tempRole}
              onChange={(newRole) => setTempRole(newRole)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

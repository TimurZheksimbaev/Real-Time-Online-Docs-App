import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserTypeSelector = ({
  userType,
  setUserType,
  onClickHandler,
}: UserTypeSelectorParams) => {
  const accessChangeHandler = (type: UserType) => {
    setUserType(type);
    if (onClickHandler) {
      onClickHandler(type);
    }
  };

  return (
    <div className="flex items-center h-full">
      <Select
        value={userType}
        onValueChange={(type: UserType) => accessChangeHandler(type)}
      >
        <SelectTrigger className="shad-select border-l border-[#3e4e6c] px-3">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="border-none bg-dark-200">
          <SelectItem value="viewer" className="shad-select-item">
            can view
          </SelectItem>
          <SelectItem value="editor" className="shad-select-item">
            can edit
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UserTypeSelector;

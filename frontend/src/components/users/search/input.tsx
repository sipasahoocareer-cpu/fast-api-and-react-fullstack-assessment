type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ value, onChange }: Props) => (
  <input
    value={value}
    placeholder="Search users..."
    onChange={(event) => onChange(event.target.value)}
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />
);

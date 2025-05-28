type LogEntryProps = {
  date: string;
  type: string;
  credits: number;
};

const LogEntry = ({ date, type, credits }: LogEntryProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-green-100 hover:bg-green-50 transition-colors duration-200 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center">
        <span className="text-gray-500 text-sm sm:text-base mr-4">{date}</span>
        <span className="font-medium text-gray-800">{type}</span>
      </div>
      <div className="flex items-center">
        <span className="text-green-600 font-semibold">{credits} Credits</span>
      </div>
    </div>
  );
};

export default LogEntry;
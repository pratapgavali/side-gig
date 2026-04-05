interface CourseCardProps {
  name: string;
  label: string;
  progress: number;
  thumbnail?: string;
  icon?: React.ReactNode;
  bgClassName?: string;
  onClick?: () => void;
}

export function CourseCard({
  name,
  label,
  progress,
  thumbnail,
  icon,
  bgClassName = "bg-blue-900",
  onClick,
}: CourseCardProps) {
  return (
    <div
      onClick={onClick}
      className="rounded-xl border border-gray-100 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`${!thumbnail ? bgClassName : ""} aspect-video overflow-hidden`}>
        {thumbnail ? (
          <img src={thumbnail} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-3xl">
            {icon}
          </div>
        )}
      </div>
      <div className="p-3">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs text-gray-400 mb-2">{label}</p>
        <div className="h-[3px] bg-gray-100 hidden rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
          />
        </div>
      </div>
    </div>
  );
}
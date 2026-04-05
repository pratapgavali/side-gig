interface TutorialItemProps {
  title: string;
  date: string;
  thumbnail?: string;
  icon?: React.ReactNode;
  bgClassName?: string;
  onClick?: () => void;
}

export function TutorialItem({
  title,
  date,
  thumbnail,
  icon,
  bgClassName = "bg-sky-100",
  onClick,
}: TutorialItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex gap-2.5 items-start py-2.5 border-b border-gray-100 last:border-b-0 cursor-pointer hover:opacity-80 transition-opacity"
    >
      <div className={`w-14 h-10 rounded-md overflow-hidden flex-shrink-0 ${!thumbnail ? bgClassName : ""}`}>
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-base">
            {icon}
          </div>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-900 leading-snug line-clamp-2 mb-0.5">
          {title}
        </p>
        <p className="text-[10px] text-gray-400">{date}</p>
      </div>
    </div>
  );
}
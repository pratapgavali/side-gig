interface TopicCardProps {
  index: number;
  title: string;
  icon?: React.ReactNode;
  thumbnail?: string;
  iconBgClassName?: string;
  onClick?: () => void;
}

export function TopicCard({
  index,
  title,
  icon,
  thumbnail,
  iconBgClassName = "bg-yellow-400",
  onClick,
}: TopicCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 bg-white border border-gray-200 rounded-md px-5 py-4 cursor-pointer shadow-md hover:border-gray-200 transition-all"
    >
      <div className={`w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 ${!thumbnail ? iconBgClassName : ""} flex items-center justify-center`}>
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-xl">{icon}</span>
        )}
      </div>
      <div>
        <p className="text-xs text-gray-400 mb-0.5">Topic {index}</p>
        <p className="text-base font-semibold text-gray-900">{title}</p>
      </div>
    </div>
  );
}
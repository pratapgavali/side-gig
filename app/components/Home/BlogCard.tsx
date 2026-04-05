interface BlogCardProps {
  title: string;
  author: string;
  date: string;
  thumbnail?: string;
  icon?: React.ReactNode;
  bgClassName?: string;
  avatarUrl?: string;
  avatarBgClassName?: string;
  avatarColorClassName?: string;
  authorInitial: string;
  onClick?: () => void;
}

export function BlogCard({
  title,
  author,
  date,
  thumbnail,
  icon,
  bgClassName = "bg-slate-900",
  avatarUrl,
  avatarBgClassName = "bg-blue-100",
  avatarColorClassName = "text-blue-800",
  authorInitial,
  onClick,
}: BlogCardProps) {
  return (
    <div
      onClick={onClick}
      className="rounded-xl border border-gray-100 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`${!thumbnail ? bgClassName : ""} aspect-video overflow-hidden`}>
        {thumbnail ? (
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl">
            {icon}
          </div>
        )}
      </div>
      <div className="p-2.5">
        <p className="text-xs font-medium text-gray-900 leading-snug mb-2 line-clamp-2">
          {title}
        </p>
        <div className="flex items-center gap-1.5">
          <div className={`w-5 hidden md:flex h-5 rounded-full overflow-hidden flex-shrink-0 ${!avatarUrl ? `${avatarBgClassName} ${avatarColorClassName} flex items-center justify-center text-[9px] font-medium` : ""}`}>
            {avatarUrl ? (
              <img src={avatarUrl} alt={author} className="w-full h-full object-cover" />
            ) : (
              authorInitial
            )}
          </div>
          <div>
            <p className="text-[11px] text-gray-500">{author}</p>
            <p className="text-[10px] text-gray-400">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
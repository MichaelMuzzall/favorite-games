export default function ({ content = 'New', classNames = '' }) {
  return (
    <div
      className={
        'px-2 bg-gradient-to-r from-amber-200 via-emerald-300 to-blue-400 text-white rounded-full ${classNames}'
      }
    >
      {content}
    </div>
  )
}

export default function TrendPopUp() {
  return (
    <div className="w-[300px] bg-black text-white p-2 rounded-lg absolute top-0 right-[245px]">
      <div className="flex items-center py-2">
        <i className="fa-solid fa-face-sad-tear mr-3"></i>
        <h2>Not interested in this</h2>
      </div>
      <div className="flex items-center py-2">
        <i className="fa-solid fa-face-sad-tear mr-3"></i>
        <h2>This trend is harmful or spammy</h2>
      </div>
    </div>
  );
}

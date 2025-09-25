import { MdDone } from "react-icons/md";
const ResolvedTask = ({resolved}) => {
  return (
    <>
      <div className="card space-y-2">
        <h1 className="text-2xl font-semibold text-[#34485a]">Resolved Task</h1>
        {
          resolved.length === 0 ? <p className="text-[#627382]">No resolved tasks yet.</p> :
          resolved.map(res => <div key={res.id}>
             <div className="mt-2">
                <div className="bg-[#d5f1de] border border-[#02A53B] p-3 rounded-lg space-y-1">
                    <h2 className="text-lg font-medium">{res.title} </h2>
                    <span className="text-sm flex flex-wrap text-[#02A53B] items-center gap-1"><MdDone size={16} /> Complete</span>
                </div>
              </div>
          </div>)
        }
      </div>
    </>
  );
};

export default ResolvedTask;

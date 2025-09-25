
const TaskStatus = ({ ticket, handleCompleteTask}) => {
  return (
    <>
      <div className="mt-4">
        {ticket.length === 0 ? (
          <p className="text-[#627382]">Select a ticket to add to Task Status</p>
        ) : (
          ticket.map((t) => (
            <div key={t.id}>
              <div className="mt-4">
                <div className="bg-base-100 p-4 rounded-lg space-y-2">
                  <h2 className="text-lg font-medium">{t.title}</h2>
                  <button onClick={() => handleCompleteTask(t.id)} className="rounded py-1.5 w-full bg-[#02A53B] text-white cursor-pointer">Complete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default TaskStatus;

import { Transition, Dialog } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { url } from "./../config";

function DeleteNote(note_id: any) {
  let [isOpen, setIsOpen] = useState(false);

  //Delete a specific note
  const deleteNote = async () => {
    try {
      console.log(url + "/" + note_id.id);

      const response = await fetch(url + "/" + note_id.id, {
        method: "DELETE",
      });

      closeModal();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="pill bg-red-400 hover:bg-red-500"
      >
        <FaTrash size={20} color="white" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-2/12 max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle content-center shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Delete Note
                  </Dialog.Title>

                  <div className="mt-2">
                    <p text-md text-gray-500>
                      Are you sure?
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-x-6 mt-4">
                    <button onClick={deleteNote} className="btn-danger">
                      Delete
                    </button>
                    <button onClick={closeModal} className="btn-sucess">
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default DeleteNote;

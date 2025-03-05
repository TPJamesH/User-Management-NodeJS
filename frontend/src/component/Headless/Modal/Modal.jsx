import { HeadlessModal } from "./HeadlessModal";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Button } from "../Button/Button";
function Modal({
    modalContent,
    modalTitle,
}) {

    return (
        <HeadlessModal
            modalTitle={modalTitle}
            modalContent={modalContent}
        >
            {({ show, showModal, hideModal, modalTitle, modalContent }) => (
                <>
                    <Button onClick={showModal}
                        label="Search"
                        className=" text-white text-sm bg-yellow-700 rounded items-center justify-center px-4 w-au h-10"
                    />
                    <Dialog open={show} as="div" className="relative z-10 focus:outline-none" onClose={hideModal}>
                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4">
                                <DialogPanel
                                    transition
                                    className="w-full max-w-md rounded-xl bg-black/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                                >
                                    <DialogTitle as="h1" className="text-2xl font-medium text-black pb-6">
                                        {modalTitle}
                                    </DialogTitle>
                                    {modalContent}
                                </DialogPanel>
                            </div>
                        </div>
                    </Dialog>
                </>
            )}
        </HeadlessModal>
    );


}



export { Modal };

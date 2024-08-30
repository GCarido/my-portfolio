"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from "@nextui-org/modal";

const Notice = () => {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    const closeModal = () => {
        setIsOpen(false);
        if (pathname !== '/') {
            window.location.pathname = '/';
        }
    };

    return (
        <div className="container mx-auto">
            <div className="mt-2 p-[10px]">
                <Modal isOpen={isOpen} onClose={closeModal} className="centered-modal">
                    <ModalContent>
                        <ModalHeader>
                            <h2>Notice</h2>
                        </ModalHeader>
                        <ModalBody>
                            <p>This project has not been deployed and is only available on GitHub.</p>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
};

export default Notice;
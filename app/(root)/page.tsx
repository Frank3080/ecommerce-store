"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const Setup = () => {
  /* const storeModal = useStoreModal() doesnt work fine when using inside of useEffect*/
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-4">Root page</div>;
};

export default Setup;

import { Overlay, StyledModal } from './Modal.style';

interface IModal {
    $isOpen: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ children, $isOpen = false }) => {
    return (
        <>
            <Overlay $isOpen={$isOpen} />
            <StyledModal $isOpen={$isOpen}>{children}</StyledModal>
        </>
    );
};

export default Modal;

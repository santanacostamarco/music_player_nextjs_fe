import { Button } from '@/common/components/navigation/Button';

type DialogProps = PWC<{
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmText: string;
}>;

export const Dialog = ({
  open,
  onClose,
  onConfirm,
  children,
  confirmText,
}: DialogProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="bg-background/40 fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex flex-col justify-between rounded-4xl bg-gray-500 px-2 py-3 shadow-lg">
        <div className="flex justify-end">
          <Button variant="text" icon="x" onClick={onClose} />
        </div>

        <div className="my-8">{children}</div>

        <div className="flex justify-center">
          <Button onClick={onConfirm}>{confirmText}</Button>
        </div>
      </div>
    </div>
  );
};

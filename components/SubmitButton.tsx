
interface ButtonProps {
    isLoading: boolean;
    className?: string;
    children: React.ReactNode;
}
export default function SubmitButton({ isLoading, className, children }: ButtonProps) {
  return (
      <Button type='submit' disabled={isLoading}>
          
    </Button>
  )
}

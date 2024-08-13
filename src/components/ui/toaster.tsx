"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { FaStar } from "react-icons/fa6";

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">

              {title && <ToastTitle className="flex gap-0 xl:gap-2  items-center text-center ">{title} <FaStar className="text-yellow-400 h-5" /></ToastTitle>}

              {description && (
                <ToastDescription className=" text-[10px] xl:text-[14px] capitalize">{description}</ToastDescription>
              )}
            </div>
            {action}

          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}


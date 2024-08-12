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
import { Button } from "./button"
import { StarIcon } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">

              {title && <ToastTitle className="flex gap-2  items-center text-center ">{title} <StarIcon  className="text-yellow-400 h-5 "/></ToastTitle>}

              {description && (
                <ToastDescription className="capitalize">{description}</ToastDescription>
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

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

// Registries capture Radix primitives alongside any local wrappers so our
// detection utilities can recognise accessible titles/descriptions regardless
// of how they are re-exported.
type DialogComponentRegistry = {
  components: Set<unknown>
  displayNames: Set<string>
}

const dialogTitleRegistry: DialogComponentRegistry = {
  components: new Set([DialogPrimitive.Title]),
  displayNames: new Set(
    [
      (DialogPrimitive.Title as { displayName?: string; name?: string }).displayName,
      (DialogPrimitive.Title as { displayName?: string; name?: string }).name,
    ].filter(Boolean) as string[]
  ),
}

const dialogDescriptionRegistry: DialogComponentRegistry = {
  components: new Set([DialogPrimitive.Description]),
  displayNames: new Set(
    [
      (DialogPrimitive.Description as { displayName?: string; name?: string }).displayName,
      (DialogPrimitive.Description as { displayName?: string; name?: string }).name,
    ].filter(Boolean) as string[]
  ),
}

// Register a Dialog component variant (e.g. our wrappers) in the corresponding
// registry so fallback detection stays in sync when new abstractions are added.
const registerDialogComponent = (
  registry: DialogComponentRegistry,
  component: unknown
) => {
  registry.components.add(component)
  const name = (component as { displayName?: string; name?: string }).displayName ?? (component as { name?: string }).name
  if (name) {
    registry.displayNames.add(name)
  }
}

const hasRegisteredDialogComponent = (
  children: React.ReactNode,
  registry: DialogComponentRegistry
): boolean => {
  let found = false
  const walk = (node: React.ReactNode) => {
    if (found || node == null) return
    React.Children.forEach(node as React.ReactNode, (child) => {
      if (found || !React.isValidElement(child)) return

      const elementType = child.type as {
        displayName?: string
        name?: string
      }

      if (
        registry.components.has(child.type) ||
        (elementType?.displayName && registry.displayNames.has(elementType.displayName)) ||
        (elementType?.name && registry.displayNames.has(elementType.name))
      ) {
        found = true
        return
      }

      if (child.props?.children) {
        walk(child.props.children)
      }
    })
  }
  walk(children)
  return found
}

// Utility to detect if any descendant is a Dialog Title. Radix logs a dev error
// when Content lacks a Title. Some of our dialogs render Title deep in the tree
// (e.g., wrapped in headers), so we perform a recursive check and maintain a
// registry of recognised components. If none are present we inject a
// visually-hidden fallback title to satisfy a11y without changing call sites.
const hasDialogTitle = (children: React.ReactNode): boolean =>
  hasRegisteredDialogComponent(children, dialogTitleRegistry)

const hasDialogDescription = (children: React.ReactNode): boolean =>
  hasRegisteredDialogComponent(children, dialogDescriptionRegistry)

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const ensureTitle = !hasDialogTitle(children)
  const ensureDescription = !hasDialogDescription(children)
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border/40 backdrop-blur-md bg-background/90 p-6 shadow-lg duration-200 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=closed]:fade-out-0 motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[state=closed]:slide-out-to-left-1/2 motion-safe:data-[state=closed]:slide-out-to-top-[48%] motion-safe:data-[state=open]:slide-in-from-left-1/2 motion-safe:data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          className
        )}
        {...props}
      >
        {ensureTitle && (
          <DialogPrimitive.Title className="sr-only">Dialog</DialogPrimitive.Title>
        )}
        {ensureDescription && (
          <DialogPrimitive.Description className="sr-only">Dialog content</DialogPrimitive.Description>
        )}
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName
registerDialogComponent(dialogTitleRegistry, DialogTitle)

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName
registerDialogComponent(dialogDescriptionRegistry, DialogDescription)

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}

// Импорт React для работы с компонентами
import * as React from "react"
// CVA (Class Variance Authority) - библиотека для управления вариантами стилей компонента
// Связанный файл: package.json (зависимость "class-variance-authority")
import { cva, type VariantProps } from "class-variance-authority"
// Slot из radix-ui позволяет компоненту рендерить дочерний элемент вместо своего корневого элемента
// Связанный файл: node_modules/radix-ui (зависимость Radix UI)
import { Slot } from "radix-ui"

// Утилита cn объединяет классы через clsx и оптимизирует их через tailwind-merge
// Связанный файл: apps/v4/registry/bases/radix/lib/utils.ts
import { cn } from "@/registry/bases/radix/lib/utils"

// Создание вариантов стилей кнопки с помощью CVA
// Базовые классы применяются ко всем кнопкам
const buttonVariants = cva(
  // Базовые стили кнопки:
  // - cn-button: основной класс для стилизации через CSS файлы
  // - inline-flex: флексбокс для выравнивания содержимого
  // - items-center, justify-center: центрирование контента
  // - whitespace-nowrap: текст не переносится на новую строку
  // - transition-all: плавные переходы для всех свойств
  // - disabled:pointer-events-none, disabled:opacity-50: стили для неактивного состояния
  // - [&_svg]:pointer-events-none, [&_svg]:shrink-0: стили для SVG иконок внутри кнопки
  // - outline-none: убирает стандартный outline браузера
  // - group/button: группировка для стилизации вложенных элементов
  // - select-none: запрещает выделение текста
  // Связанные файлы: apps/v4/registry/styles/style-nova.css (и другие стили)
  "cn-button inline-flex items-center justify-center whitespace-nowrap  transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    // Определение вариантов стилей кнопки
    variants: {
      // Варианты визуального стиля кнопки
      variant: {
        // default: основная кнопка с заливкой primary цвета
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 153)
        default: "cn-button-variant-default",
        // outline: кнопка с рамкой без заливки
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 157)
        outline: "cn-button-variant-outline",
        // secondary: кнопка с secondary цветом
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 161)
        secondary: "cn-button-variant-secondary",
        // ghost: кнопка без рамки и заливки (прозрачная)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 165)
        ghost: "cn-button-variant-ghost",
        // destructive: кнопка для опасных действий (удаление, сброс)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 169)
        destructive: "cn-button-variant-destructive",
        // link: кнопка стилизованная как ссылка
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 173)
        link: "cn-button-variant-link",
      },
      // Варианты размеров кнопки
      size: {
        // default: стандартный размер кнопки (высота 8 = 32px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 185)
        default: "cn-button-size-default",
        // xs: самая маленькая кнопка (высота 6 = 24px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 177)
        xs: "cn-button-size-xs",
        // sm: маленькая кнопка (высота 7 = 28px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 181)
        sm: "cn-button-size-sm",
        // lg: большая кнопка (высота 9 = 36px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 189)
        lg: "cn-button-size-lg",
        // icon: квадратная кнопка для иконки (8x8 = 32x32px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 201)
        icon: "cn-button-size-icon",
        // icon-xs: маленькая квадратная кнопка (6x6 = 24x24px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 193)
        "icon-xs": "cn-button-size-icon-xs",
        // icon-sm: маленькая квадратная кнопка (7x7 = 28x28px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 197)
        "icon-sm": "cn-button-size-icon-sm",
        // icon-lg: большая квадратная кнопка (9x9 = 36x36px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 205)
        "icon-lg": "cn-button-size-icon-lg",
      },
    },
    // Значения по умолчанию, если пропсы не указаны
    defaultVariants: {
      variant: "default", // По умолчанию используется default вариант
      size: "default",    // По умолчанию используется default размер
    },
  }
)

// Компонент Button - основная функция рендера кнопки
function Button({
  className,          // Дополнительные CSS классы для кастомизации
  variant = "default", // Вариант стиля кнопки (default, outline, secondary, ghost, destructive, link)
  size = "default",    // Размер кнопки (default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg)
  asChild = false,     // Флаг: если true, кнопка рендерится как дочерний элемент через Slot
  ...props            // Все остальные стандартные пропсы HTML button элемента
}: React.ComponentProps<"button"> &  // Типы всех стандартных атрибутов HTML button
  VariantProps<typeof buttonVariants> & {  // Типы вариантов из CVA (variant и size)
    asChild?: boolean  // Тип для пропса asChild
  }) {
  // Выбор компонента для рендера:
  // - Если asChild=true, используется Slot.Root (дочерний элемент становится корневым)
  // - Если asChild=false, используется стандартный HTML элемент "button"
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      // data-slot="button": атрибут для CSS селекторов и тестирования
      data-slot="button"
      // data-variant: сохраняет текущий вариант в DOM для CSS селекторов
      data-variant={variant}
      // data-size: сохраняет текущий размер в DOM для CSS селекторов
      data-size={size}
      // className: объединение всех классов через утилиту cn
      // buttonVariants генерирует классы на основе variant и size
      // className добавляет пользовательские классы
      // Связанный файл: apps/v4/registry/bases/radix/lib/utils.ts (функция cn)
      className={cn(buttonVariants({ variant, size, className }))}
      // Распространение всех остальных пропсов на элемент (onClick, disabled, type и т.д.)
      {...props}
    />
  )
}

// Экспорт компонента Button и функции buttonVariants
// buttonVariants экспортируется для переиспользования вариантов в других компонентах
export { Button, buttonVariants }

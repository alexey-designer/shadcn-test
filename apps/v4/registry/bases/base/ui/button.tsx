// Директива "use client" указывает, что этот компонент рендерится на клиенте
// Необходима в Next.js App Router для компонентов с интерактивностью
"use client"

// ButtonPrimitive из Base UI (от MUI) - headless компонент кнопки с встроенной доступностью
// Base UI предоставляет базовую функциональность без стилей
// Связанный файл: node_modules/@base-ui/react (зависимость Base UI)
// Документация: https://base-ui.com/react/button
import { Button as ButtonPrimitive } from "@base-ui/react/button"
// CVA (Class Variance Authority) - библиотека для управления вариантами стилей компонента
// Связанный файл: package.json (зависимость "class-variance-authority")
import { cva, type VariantProps } from "class-variance-authority"

// Утилита cn объединяет классы через clsx и оптимизирует их через tailwind-merge
// Связанный файл: apps/v4/registry/bases/base/lib/utils.ts
import { cn } from "@/registry/bases/base/lib/utils"

// Создание вариантов стилей кнопки с помощью CVA
// Базовые классы применяются ко всем кнопкам
const buttonVariants = cva(
  // Базовые стили кнопки:
  // - cn-button: основной класс для стилизации через CSS файлы
  // - inline-flex: флексбокс для выравнивания содержимого
  // - items-center, justify-center: центрирование контента по вертикали и горизонтали
  // - whitespace-nowrap: текст не переносится на новую строку
  // - transition-all: плавные переходы для всех CSS свойств при изменении состояния
  // - disabled:pointer-events-none: отключает события мыши для неактивной кнопки
  // - disabled:opacity-50: полупрозрачность для визуального указания на неактивность
  // - [&_svg]:pointer-events-none: SVG иконки внутри кнопки не перехватывают события клика
  // - shrink-0: кнопка не сжимается в flex-контейнере
  // - [&_svg]:shrink-0: SVG иконки не сжимаются
  // - outline-none: убирает стандартный outline браузера (доступность обеспечивается через Base UI)
  // - group/button: именованная группа для стилизации вложенных элементов через group-hover и т.д.
  // - select-none: запрещает выделение текста кнопки при клике
  // Связанные файлы: apps/v4/registry/styles/style-nova.css (и другие style-*.css файлы)
  "cn-button inline-flex items-center justify-center whitespace-nowrap  transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    // Определение вариантов стилей кнопки
    variants: {
      // Варианты визуального стиля кнопки (цветовые схемы и оформление)
      variant: {
        // default: основная акцентная кнопка с заливкой primary цвета
        // Используется для главных действий на странице
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 153)
        default: "cn-button-variant-default",
        // outline: кнопка с рамкой без заливки фона
        // Используется для второстепенных действий
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 157)
        outline: "cn-button-variant-outline",
        // secondary: кнопка с secondary цветовой схемой
        // Используется для альтернативных действий
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 161)
        secondary: "cn-button-variant-secondary",
        // ghost: минималистичная кнопка без рамки и заливки
        // Появляется фон только при наведении
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 165)
        ghost: "cn-button-variant-ghost",
        // destructive: кнопка для опасных/деструктивных действий (удаление, сброс)
        // Обычно красного или предупреждающего цвета
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 169)
        destructive: "cn-button-variant-destructive",
        // link: кнопка стилизованная как текстовая ссылка
        // Используется для навигационных действий
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 173)
        link: "cn-button-variant-link",
      },
      // Варианты размеров кнопки (высота, padding, размер шрифта)
      size: {
        // default: стандартный размер кнопки (высота 32px)
        // Используется в большинстве случаев
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 185)
        default: "cn-button-size-default",
        // xs: самая маленькая кнопка (высота 24px)
        // Используется в компактных интерфейсах
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 177)
        xs: "cn-button-size-xs",
        // sm: маленькая кнопка (высота 28px)
        // Используется для вторичных действий в ограниченном пространстве
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 181)
        sm: "cn-button-size-sm",
        // lg: большая кнопка (высота 36px)
        // Используется для важных call-to-action элементов
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 189)
        lg: "cn-button-size-lg",
        // icon: квадратная кнопка для иконки стандартного размера (32x32px)
        // Используется для кнопок только с иконкой без текста
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 201)
        icon: "cn-button-size-icon",
        // icon-xs: самая маленькая квадратная кнопка для иконки (24x24px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 193)
        "icon-xs": "cn-button-size-icon-xs",
        // icon-sm: маленькая квадратная кнопка для иконки (28x28px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 197)
        "icon-sm": "cn-button-size-icon-sm",
        // icon-lg: большая квадратная кнопка для иконки (36x36px)
        // Связанный файл: apps/v4/registry/styles/style-nova.css (строка 205)
        "icon-lg": "cn-button-size-icon-lg",
      },
    },
    // Значения по умолчанию, если пропсы не указаны при использовании компонента
    defaultVariants: {
      variant: "default", // По умолчанию используется основной акцентный стиль
      size: "default",    // По умолчанию используется стандартный размер
    },
  }
)

// Компонент Button - обёртка над ButtonPrimitive с применением стилей
function Button({
  className,          // Дополнительные CSS классы для кастомизации конкретного экземпляра кнопки
  variant = "default", // Вариант стиля кнопки (default, outline, secondary, ghost, destructive, link)
  size = "default",    // Размер кнопки (default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg)
  ...props            // Все остальные пропсы ButtonPrimitive (onClick, disabled, type, children и т.д.)
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  // Типы:
  // - ButtonPrimitive.Props: все пропсы из Base UI Button компонента
  // - VariantProps<typeof buttonVariants>: типы вариантов из CVA (variant и size)
  return (
    <ButtonPrimitive
      // data-slot="button": data-атрибут для CSS селекторов и автоматизированного тестирования
      // Позволяет находить элемент через [data-slot="button"] в CSS и тестах
      data-slot="button"
      // className: объединение всех классов через утилиту cn
      // Порядок: buttonVariants генерирует базовые классы + классы варианта/размера + пользовательские классы
      // twMerge автоматически разрешает конфликты Tailwind классов
      // Связанный файл: apps/v4/registry/bases/base/lib/utils.ts (функция cn)
      className={cn(buttonVariants({ variant, size, className }))}
      // Распространение всех остальных пропсов на Base UI компонент
      // Включает: onClick, disabled, type, children, aria-*, и другие HTML/React атрибуты
      {...props}
    />
  )
}

// Экспорт компонента Button и функции buttonVariants
// Button: основной компонент для использования в приложении
// buttonVariants: экспортируется для переиспользования стилей в других компонентах
// Например, можно создать вариант Link с такими же стилями: className={buttonVariants({ variant: "outline" })}
export { Button, buttonVariants }

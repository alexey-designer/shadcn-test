import { ruDocs } from "@/.source"
import { loader } from "fumadocs-core/source"

export const sourceRu = loader({
  baseUrl: "/ru-docs",
  source: ruDocs.toFumadocsSource(),
})

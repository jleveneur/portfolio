"use client";

import { ColumnDef } from "@tanstack/react-table";

import { DataTableColumnHeader } from "./data-table-column-header";
import { Skill } from "@/types";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const columns: ColumnDef<Skill>[] = [
  {
    accessorKey: "knowledge",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Maîtrise" />
    ),
    meta: {
      className: "hidden lg:table-cell",
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Intitulé" />
    ),
    enableHiding: false,
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Catégorie" />
    ),
    meta: {
      className: "hidden md:table-cell",
    },
  },
  {
    accessorKey: "experience",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Expérience" />
    ),
    meta: {
      className: "hidden sm:table-cell",
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => {
      const type = row.getValue("type") as string;

      if (type === "Technique") {
        return <Badge>{type}</Badge>;
      }

      return <Badge variant="secondary">{type}</Badge>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    meta: {
      className: "hidden lg:table-cell",
    },
  },
  {
    accessorKey: "level",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Niveau" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: ({ row }) => {
      const skill = row.original;
      console.log(skill.code);

      if (skill.code) {
        return (
          <Dialog>
            <DialogTrigger>
              <span className="cursor-pointer underline">{skill.level}</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {skill.code} - {skill.title}
                </DialogTitle>
                <DialogDescription>{skill.description}</DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        );
      }

      return skill.level;
    },
    enableHiding: false,
  },
];

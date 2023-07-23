import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/react";

import { FieldSet } from "airtable";
import { airtable } from "./airtablesInit";
import AirtablesService from "./AirtablesService";

type AirtableQueryArgs<T extends FieldSet> =
  | {
      type: "list";
      filterByFormula?: string;
    }
  | {
      type: "find";
      filterByFormula?: string;
    }
  | {
      type: "create";
      records: Array<{ fields: Partial<T> }>;
    }
  | {
      type: "update";
      records: Array<{
        id: string;
        fields: Partial<T>;
      }>;
    }
  | {
      type: "get";
      id: string;
    }
  | {
      type: "delete";
      ids: string[];
    }
  | {
      type: "modify";
      id: string;
      modifier: (data: T) => Partial<T>;
    };

export function airtableBaseQuery<T extends FieldSet>(
  tableName: string
): BaseQueryFn<AirtableQueryArgs<T>> {
  const tableService = new AirtablesService<T>(airtable(tableName));

  return async (args) => {
    try {
      if (args.type === "create") {
        return { data: await tableService.create(args) };
      }

      if (args.type === "list") {
        return { data: await tableService.list(args) };
      }

      if (args.type === "find") {
        return { data: await tableService.find(args) };
      }

      if (args.type === "get") {
        return { data: await tableService.getById(args) };
      }

      if (args.type === "update") {
        return { data: await tableService.update(args) };
      }

      if (args.type === "delete") {
        return { data: await tableService.destroy(args) };
      }

      if (args.type === "modify") {
        return { data: await tableService.modify(args) };
      }

      throw new Error("Invalid query type");
    } catch {
      return { error: "Airtable request error" };
    }
  };
}

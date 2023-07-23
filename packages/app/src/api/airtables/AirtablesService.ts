import { FieldSet, Table, Record, Records } from "airtable";

class AirtablesService<T extends FieldSet> {
  private table: Table<T>;

  public constructor(table: Table<T>) {
    this.table = table;
  }

  public list = async (options: {
    filterByFormula?: string;
  }): Promise<Array<T & { id: string }>> => {
    try {
      const response = await this.table
        .select({
          view: "main",
          filterByFormula: options.filterByFormula ?? "",
        })
        .all();

      return response.map(({ id, fields }) => ({
        id,
        ...fields,
      }));
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  public create = async (options: {
    records: Array<{ fields: Partial<T> }>;
  }): Promise<string[]> => {
    try {
      const response = await this.table.create(options.records);

      return response.map(({ id }) => id);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  public update = async (options: {
    records: Array<{ id: string; fields: Partial<T> }>;
  }): Promise<string[]> => {
    try {
      await this.table.update(options.records);

      return options.records.map(({ id }) => id);
    } catch (e) {
      console.error(e);
      throw e;
    }
  };

  public modify = async (options: {
    id: string;
    modifier: (data: T) => Partial<T>;
  }): Promise<string> => {
    const { id, modifier } = options;

    const item = await this.getById({ id });

    await this.update({
      records: [
        {
          id,
          fields: modifier(item),
        },
      ],
    });

    return id;
  };

  public destroy = async (options: { ids: string[] }): Promise<void> => {
    await this.table.destroy(options.ids);
  };

  public getById = async (options: {
    id: string;
  }): Promise<T & { id: string }> => {
    const record = await this.table.find(options.id);

    return { id: record.id, ...record.fields };
  };

  public find = async (options: {
    filterByFormula?: string;
  }): Promise<(T & { id: string }) | undefined> => {
    let response: Records<T>;

    try {
      response = await this.table
        .select({
          view: "main",
          filterByFormula: options.filterByFormula,
        })
        .all();
    } catch (e) {
      console.error(e);
      throw e;
    }

    const first = response[0];

    if (first === undefined) {
      throw new Error("Not found");
    }

    return {
      id: first.id,
      ...first.fields,
    };
  };
}

export default AirtablesService;

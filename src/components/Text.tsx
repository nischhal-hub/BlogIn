"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "./button";

interface IProps {
  data?: string;
  className?: string;
  styles?: {
    paragraph?: string;
    header?: {
      "1"?: string;
      "2"?: string;
      "3"?: string;
      "4"?: string;
      "5"?: string;
      "6"?: string;
    };
    list?: {
      ordered?: {
        style?: string;
        item?: string;
      };
      unordered?: {
        style?: string;
        item?: string;
      };
    };
    code?: string;
    table?: {
      headings?: string;
      row?: string;
      column?: string;
      cell?: string;
      table?: string;
      thead?: string;
      tbody?: string;
    };
  };
  readMore?: boolean;
}

export default function EditorJSRenderer({
  data,
  className,
  styles = {
    paragraph: "",
    header: {
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
    },
    list: {
      ordered: {
        style: "my-4",
        item: "ml-6",
      },
      unordered: {
        style: "my-4",
        item: "ml-6",
      },
    },
    code: "my-4 p-4 bg-gray-100 rounded-md border",
    table: {
      headings: "py-1",
      row: "divide-x divide-gray-200",
      column: "",
      cell: "py-1 px-4",
      table: "w-full divide-y divide-gray-200 my-4",
      tbody: "divide-y divide-gray-200",
      thead: "divide-y divide-gray-200",
    },
  },
  readMore: props_readMore = false,
}: IProps) {
  const [show, setShow] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const getBlocks = useCallback((styles: IProps["styles"], data?: string) => {
    try {
      if (!data) return null;

      const parsed = JSON.parse(data) as {
        time: number;
        blocks: {
          id: string;
          type:
          | "paragraph"
          | "header"
          | "list"
          | "code"
          | "table"
          | "image"
          | "raw";
          data: unknown;
        }[];
        version: string;
      };

      return parsed.blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            const paragraph_data = block.data as { text: string };
            return (
              <p
                key={block.id}
                className={cn(styles?.paragraph, "text-gray-600")}
                dangerouslySetInnerHTML={{
                  __html: paragraph_data.text,
                }}
              />
            );
          case "header":
            const header_data = block.data as {
              level: 1 | 2 | 3 | 4 | 5 | 6;
              text: string;
            };
            const Header =
              `h${header_data.level}` as keyof JSX.IntrinsicElements;
            return (
              <Header
                key={block.id}
                className={cn(
                  styles?.header?.[header_data.level],
                  "text-gray-600",
                )}
                dangerouslySetInnerHTML={{
                  __html: header_data.text,
                }}
              />
            );
          case "list":
            const list_data = block.data as {
              style: "ordered" | "unordered";
              items: string[];
            };
            const List = list_data.style === "ordered" ? "ol" : "ul";
            return (
              <List
                key={block.id}
                className={cn(styles?.list?.[list_data.style]?.style)}
              >
                {list_data.items.map((item, i) => (
                  <li
                    key={i}
                    className={cn(
                      styles?.list?.[list_data.style]?.item,
                      "text-gray-600",
                    )}
                    dangerouslySetInnerHTML={{
                      __html: item,
                    }}
                  />
                ))}
              </List>
            );
          case "code":
            const code_data = block.data as { code: string };
            return (
              <pre key={block.id} className={cn(styles?.code, "text-gray-600")}>
                {code_data.code}
              </pre>
            );
          case "table":
            const table_data = block.data as {
              content: string[][];
              withHeadings: boolean;
            };
            return (
              <table key={block.id} className={cn("", styles?.table?.table)}>
                {table_data.withHeadings && (
                  <thead className={cn("", styles?.table?.thead)}>
                    <tr className={cn("", styles?.table?.row)}>
                      {table_data.content[0].map((heading, i) => (
                        <th
                          key={i}
                          className={cn(
                            styles?.table?.headings,
                            "text-gray-600",
                          )}
                          dangerouslySetInnerHTML={{
                            __html: heading,
                          }}
                        />
                      ))}
                    </tr>
                  </thead>
                )}
                <tbody className={cn("", styles?.table?.tbody)}>
                  {table_data.content
                    .filter((_, index) => {
                      if (table_data.withHeadings) {
                        return index !== 0;
                      }
                      return true;
                    })
                    .map((row, i) => (
                      <tr key={i} className={cn("", styles?.table?.row)}>
                        {row.map((column, i) => (
                          <td
                            key={i}
                            className={cn(styles?.table?.cell, "text-gray-600")}
                            dangerouslySetInnerHTML={{
                              __html: column,
                            }}
                          />
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            );
          case "image":
            const image_data = block.data as {
              file: { url: string };
              caption: string;
              withBorder: boolean;
              withBackground: boolean;
              stretched: boolean;
            };
            return (
              <div
                key={block.id}
                className={cn(
                  "w-full",
                  image_data.withBorder
                    ? "border border-gray-200 rounded-md overflow-hidden"
                    : "",
                  image_data.withBackground ? "bg-gray-100" : "",
                )}
              >
                <Image
                  src={image_data.file.url}
                  alt={image_data.caption}
                  width={1920}
                  height={1080}
                  className={cn(
                    "w-full",
                    image_data.stretched ? "object-cover" : "object-contain",
                  )}
                />
                {image_data.caption && (
                  <p className="text-center text-sm py-2 text-gray-700">
                    {image_data.caption}
                  </p>
                )}
              </div>
            );
          case "raw":
            const raw_data = block.data as { html: string };
            return (
              <div
                key={block.id}
                className={cn("w-full", "text-gray-600")}
                dangerouslySetInnerHTML={{
                  __html: raw_data.html,
                }}
              />
            );
          default:
            return null;
        }
      });
    } catch (error) {
      return null;
    }
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if the container is overflowing, show the read more button
    if (props_readMore && containerRef.current) {
      const { scrollHeight, clientHeight } = containerRef.current;
      if (scrollHeight > clientHeight) {
        setReadMore(true);
      } else {
        setReadMore(false);
      }
    }
  }, [props_readMore]);

  return (
    <div className={cn("space-y-2 transition-all ease-in-out duration-500")}>
      <div
        ref={containerRef}
        className={cn(
          "w-full relative",
          props_readMore ? "max-h-32 overflow-hidden min-h-[40px]" : "",
          show ? "max-h-full" : "",
          className,
        )}
        id="editor-js-renderer"
      >
        {getBlocks(styles, data)}
      </div>
      {props_readMore && readMore && (
        <div className="flex justify-end">
          <Button onClick={() => setShow((prev) => !prev)}>
            {show ? "Read less" : "Read more"}
          </Button>
        </div>
      )}
    </div>
  );
}
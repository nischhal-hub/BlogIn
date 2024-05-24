import { cn } from '../utils'
import extractFileName from '../utils/extractFIleName'
import {blog} from '../testdata'

export const EditorJSRenderer = ({ data }: string) => {
    const styles = {
        header: {
            "1": "text-3xl font-urbanist font-bold my-2",
            "2": "text-2xl font-urbanist font-bold my-2",
            "3": "text-xl font-urbanist font-bold my-2",
            "4": "text-lg font-urbanist font-bold my-2",
            "5": "text-base font-urbanist font-bold my-2",
            "6": "text-sm font-urbanist font-bold my-2",
        },
        paragraph: "text-base font-urbanist my-2 text-justify",
        list: "ml-5"

    }

    const parsedContent = JSON.parse(data) as {
        time:number;
        blocks:{
            id:string;
            type:|"paragraph"|"header"|"list"|"code"|"image"|"raw";
            data:unknown;
        }[];
        version:string;
    }
    console.log(parsedContent)

    parsedContent.blocks.map((item: any) => {
        switch (item.type) {
            case "header":
                const header_data = item.data as {
                    text: string;
                    level: 1 | 2 | 3 | 4 | 5 | 6;
                }
                const Header = `h${header_data.level}` as keyof JSX.IntrinsicElements; //*TYPE FOR ALL STANDARD HTML ELEMENTS.
                return <Header key={item.id} className={cn(styles.header?.[header_data.level])}>
                    {header_data.text}
                </Header>

            case "paragraph":
                const paragraph_data = item.data as { text: string }
                return <p key={item.id} className={cn(styles.paragraph)}>
                    {paragraph_data.text}
                </p>
            case "list":
                const list_data = item.data as {
                    style: string;
                    items: string[];
                }
                const List = item.data.style === "ordered" ? "ul" : "li";
                return <List key={item.id} className={styles.list}>
                    {list_data.items.map((item: string) => (
                        <li>{item}</li>
                    ))}
                </List>
            case "raw":
                const raw_data = item.data as {
                    html: string;
                }
                return (
                    <div key={item.id}
                        className="mx-auto my-2 w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl "
                    >
                        <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
                            <div className="flex absolute left-3">
                                <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
                                <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
                                <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
                            </div>
                            <div className="flex-1 text-center text-white">status</div>
                        </div>
                        <div className="p-2.5 text-[#0f0]">
                            <div>
                                <p>{raw_data.html}</p>
                            </div>
                        </div>
                    </div>
                )
            case "code":
                const code_data = item.data as {
                    code: string;
                }
                return (
                    <div key={item.id}
                        className="mx-auto my-2 w-[500px] bg-gray-950 rounded-xl overflow-hidden drop-shadow-xl "
                    >
                        <div className="bg-[#333] flex items-center p-[5px] text-whitec relative">
                            <div className="flex absolute left-3">
                                <span className="h-3.5 w-3.5 bg-[#ff605c] rounded-xl mr-2"></span>
                                <span className="h-3.5 w-3.5 bg-[#ffbd44] rounded-xl mr-2"></span>
                                <span className="h-3.5 w-3.5 bg-[#00ca4e] rounded-xl"></span>
                            </div>
                            <div className="flex-1 text-center text-white">status</div>
                        </div>
                        <div className="p-2.5 text-[#0f0]">
                            <div>
                                <p>{code_data.code}</p>
                            </div>
                        </div>
                    </div>
                )

            case "image":
                const image_data = item.data as {
                    file: {
                        url: string;
                    };
                    caption: string;
                    withBorder: boolean;
                    stretched: boolean;
                    withBackground: boolean;
                }
                return (
                    <div className={
                        cn(
                            "w-full",
                            image_data.withBorder ? "border-2 border-solid border-borderColor" : "",
                            image_data.withBackground ? "bg-secondary" : "",
                            "rounded-md",
                        )
                    }>
                        <img src={`http://192.168.1.227:5000/api/images/${extractFileName(image_data.file.url)}`} alt="image"
                            className={cn(
                                'w-full',
                                image_data.stretched ? "object-cover" : "object-contain"
                            )} />
                        {image_data.caption && (
                            <p className="text-center text-sm py-2 font-urbanist text-textLight">
                                {image_data.caption}
                            </p>
                        )}
                    </div>)
            defualt:
                return null;
        }
    })

}
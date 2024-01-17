import { QuestionOutlined } from '@ant-design/icons';

interface Iprops {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: any;
    title: string;
    description?: string;
}

const CardService = (props: Iprops) => {
    const { title = 'Tiêu đề', description = '....... (Lê Văn Anh Đức) ........', icon = <QuestionOutlined /> } = props;
    return (
        <div className="shadow-xl w-full h-64 p-5 rounded-md relative transition duration-500 hover:bg-primary-300 hover:text-white group">
            <div className="text-3xl font-extrabold bg-primary-300 text-white absolute -top-10 left-4 h-20 w-20 rounded-full shadow flex justify-center items-center transition duration-500 group-hover:translate-x-10 group-hover:bg-white group-hover:text-primary-300">
                {icon}
            </div>
            <div className="my-8 grid gap-5 ">
                <div className="text-xl font-medium">{title}</div>
                <div className="text-gray-600 group-hover:text-white transition duration-500">{description}</div>
            </div>
        </div>
    );
};

export default CardService;

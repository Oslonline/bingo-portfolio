import Stack from "../components/Stack";
import stackData from "../stacks.json";

function Stacks() {
    return (
        <section className="py-16 flex items-center justify-center bg-gray-50 dark:bg-gray-900 md:py-20">
            <div className="flex flex-col items-center gap-8">
                <h3 className="w-max select-none rounded-full bg-gray-200 px-3 py-1 text-gray-800 dark:bg-gray-700 dark:text-gray-50">Stacks</h3>
                <div className="flex w-4/5 flex-wrap justify-center gap-8">
                    {stackData.map((stack, index) => (
                        <Stack key={index} project={stack} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stacks;

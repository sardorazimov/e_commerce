import { Input } from "@/components/ui/input";

<form action="https://tailwindflex.com/search">
            <div className="mx-auto mt-8 relative bg-white dark:bg-gray-50 min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300">

                <Input id="search-bar" placeholder="keyword" name="q" className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white dark:bg-gray-50" />
                <button type="submit" className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all">
                    <span className="flex items-center transition-all opacity-1">
                        <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                            Search
                        </span>
                    </span>
                </button>
            </div>
        </form>
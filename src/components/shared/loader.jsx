import defaultLoadingGif from '../../assets/gif/loading.gif';
import mainLoadingGif from '../../assets/gif/main-loading.webp';

const DefaultLoading = () => {
    return (
        <div className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-white">
            <img src={defaultLoadingGif} alt='loading' className="w-20" />
            <h3 className='mt-4 text-slate-600'>loading...</h3>
        </div>
    );
};

const MainLoading = () => {
    return (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen" >
            <img src={mainLoadingGif} alt='loading' className="w-3/12 " />
        </div>

    );
}

export { DefaultLoading, MainLoading };
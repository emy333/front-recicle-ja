function AlertError({message}) {
    return (
        <>
            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400  w-full flex items-center justify-center" role="alert">
                <span className="font-medium">{message}</span> 
            </div>
        </>
    )
}

export default AlertError;
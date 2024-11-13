function AlertSuccess({message}) {
    return (
        <>
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 w-full flex items-center justify-center" role="alert">
                <span className="font-medium">{message}</span> 
            </div>
        </>
    )
}

export default AlertSuccess;
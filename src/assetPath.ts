/** public 폴더 리소스 경로 (vite base '/portfolio/' 반영) */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;


import { useRouter } from 'vue-router'
const getRouter = () => {
    const router = useRouter()
    return router.options?.routes?.slice(2)
}
export { getRouter }
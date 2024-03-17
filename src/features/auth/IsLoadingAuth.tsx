import { useCurrentQuery } from "../../app/services/auth"
import { Loading } from "../../componets/loading/Loading"

export const IsLoadingAuth = ({ children }: { children: JSX.Element }) => {
	const { isLoading } = useCurrentQuery()

	if (isLoading) return <Loading/>
	return children
}

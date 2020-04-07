import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardComponent)

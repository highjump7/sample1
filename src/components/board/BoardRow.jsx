import { Link } from 'react-router-dom';

const BoardRow = () => {
    return (
        <tr>
            <td>id</td>
            <td className="board-title-cell">
                <Link to={``}>title</Link>
            </td>
            <td>author</td>
            <td>date</td>
            <td>views</td>
        </tr>
    );
};

export default BoardRow;

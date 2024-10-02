import { Link} from 'react-router-dom';
import { useCubeAcademyDeleteNomination, useCubeAcademyGetAllNominations, useCubeAcademyRetrieveNomineeList } from '../../queries/cubeComponents';
import { useCallback, useEffect, useState } from 'react';
import { Nominations, Nominee } from '../../queries/cubeResponses';
import clsx from 'clsx';
import { HiOutlineTrash } from 'react-icons/hi';
import { RxPencil1 } from 'react-icons/rx';
import Header from '../../components/shared/header';
import EmptyState from './emptystate';
import Modal from '../../components/shared/modal';
import Button from '../../components/shared/button';

type NominationDetails = {
  id: string;
  name: string;
  dateSubmitted: string;
  dueDate: string;
  reason: string;
  process: string;
};

const defaultNomination: NominationDetails = {
  id: '',
  name: '',
  dueDate: '',
  dateSubmitted: '',
  reason: '',
  process: '',
};

const formatNominationData = (params: { nominations: Nominations['data'] | undefined; nominees: Nominee['data'] | undefined }): NominationDetails[] => {
  if (!params.nominations || !params.nominees) return [];

  return params.nominations.map((nomination) => {
    const nominee = params.nominees?.find(({ nominee_id }) => nominee_id === nomination.nominee_id);
    const firstName = nominee?.first_name || '';
    const lastName = nominee?.last_name || '';

    return {
      id: nomination.nomination_id || '',
      name: firstName || lastName ? `${firstName} ${lastName}` : 'No Name',
      dueDate: nomination.closing_date || '',
      dateSubmitted: nomination.date_submitted || '',
      reason: nomination.reason || 'No reason provided',
      process: nomination.process ? nomination.process.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'No process provided',
    };
  });
};

enum SortOption {
  Active = 'active',
  Completed = 'completed',
}

const Nomination = () => {
  const [initialDataEmpty, setInitialDataEmpty] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>(SortOption.Active);
  const [nominationIdToDelete, setNominationIdToDelete] = useState<string | null>(null);
  const [isModalVisible, setModalVisibility] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const { data: nominationList,  isFetched: nominationsFetched } = useCubeAcademyGetAllNominations({}, { refetchOnMount: true });
  const { data: nomineeList,  isFetched: nomineesFetched } = useCubeAcademyRetrieveNomineeList({}, { refetchOnMount: true });
  
  const { mutateAsync: deleteNomination } = useCubeAcademyDeleteNomination();

  const nominationData: NominationDetails[] = formatNominationData({
    nominations: nominationList?.data,
    nominees: nomineeList?.data,
  });

  const [filteredNominations, setFilteredNominations] = useState<NominationDetails[]>([]);

  const filterActiveNominations = useCallback(() => {
    setSortOption(SortOption.Active);
    const activeNominations = nominationData.filter(({ dueDate }) =>
        new Date(new Date(dueDate).setHours(23, 59, 59, 0)).getTime() -
    new Date().getTime() >
0);
    setFilteredNominations(activeNominations.length ? activeNominations : [defaultNomination]);
  }, [nominationData]);

  const filterCompletedNominations = useCallback(() => {
    setSortOption(SortOption.Completed);
    const completedNominations = nominationData.filter(({ dueDate }) => 
        new Date(new Date(dueDate).setHours(23, 59, 59, 0)).getTime() -
    new Date().getTime() <
0);
    setFilteredNominations(completedNominations.length ? completedNominations : [defaultNomination]);
  }, [nominationData]);

  const handleDelete = async () => {
    if (!nominationIdToDelete) return;
    
    try {
      await deleteNomination({ pathParams: { nominationId: nominationIdToDelete } });
      setModalVisibility(false);
      setFilteredNominations((prev) => prev.filter(({ id }) => id !== nominationIdToDelete));
    } catch (err: any) {
      setDeleteError(err.message);
    }
  };

  const openDeleteModal = (id: string) => {
    setNominationIdToDelete(id);
    setModalVisibility(true);
  };

  const closeModal = () => setModalVisibility(false);

  useEffect(() => {
    if (!nominationsFetched || !nomineesFetched) return;
    if (nominationData.length === 0) {
        setInitialDataEmpty(true);
      }
    if (sortOption === SortOption.Active) {
      filterActiveNominations();
    } else {
      filterCompletedNominations();
    }
  }, [nominationsFetched, nomineesFetched, sortOption]); 
  return (
   
    <>
      <Header />
      <div className="flex items-center justify-center bg-gradient-to-r from-lime-300 to-green-500 min-h-screen">
        <div className="max-w-screen-laptop my-5 tablet:my-10 w-full">
          {(!initialDataEmpty) ? (
            <>
              <div className="p-6 tablet:p-0">
                <h1 className="text-2xl tablet:text-3xl font-bold mb-7 tablet:mb-14">YOUR NOMINATIONS</h1>
                <div className="mb-4">
                  <button
                    className={clsx(
                      'w-[100px] h-[37px] tablet:w-[136px] tablet:h-[50px] leading-[30px] mr-4',
                      sortOption === SortOption.Active ? 'bg-white text-black font-bold shadow-[0px_2px_10px_0px_#1A1A193D]' : 'bg-green text-gray-dark font-anonymous'
                    )}
                    onClick={filterActiveNominations}
                  >
                    Current
                  </button>
                  <button
                    className={clsx(
                      'w-[136px] h-[50px] leading-[30px]',
                      sortOption === SortOption.Completed ? 'bg-white text-black font-bold shadow-[0px_2px_10px_0px_#1A1A193D]' : 'bg-green text-gray-dark font-anonymous'
                    )}
                    onClick={filterCompletedNominations}
                  >
                    Closed
                  </button>
                </div>
              </div>

              <div className="relative bg-white hidden tablet:block tablet:shadow-[0px_2px_10px_0px_#1A1A193D]">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#F9FAFB]">
                      <th className="p-4 pl-6">NOMINEE</th>
                      <th className="p-4">DATE SUBMITTED</th>
                      <th className="p-4">CLOSING DATE</th>
                      <th className="p-4">REASON</th>
                      <th className="p-4">PROCESS</th>
                      <th className="p-4" />
                    </tr>
                  </thead>
                  <tbody className="font-anonymous leading-[30px] border-[#EAECF0]">
                    {filteredNominations.map(({ id, name, reason, process, dueDate, dateSubmitted }) => (
                      <tr key={id} className="border-b">
                        <td className="w-[20%] p-4 pl-6">{name}</td>
                        <td className="w-[20%] p-4">{dateSubmitted}</td>
                        <td className="w-[20%] p-4">{dueDate}</td>
                        <td className="w-[30%] p-4 truncate max-w-[330px]">{reason}</td>
                        <td className="w-[5%] p-4">{process}</td>
                        <td className="w-[5%] p-4">
                          <div className="flex justify-center items-center">
                          {id ? (
                            <button aria-label="Delete nomination" type="button" onClick={() => openDeleteModal(id)}>
                              <HiOutlineTrash className="h-10 w-10 text-black p-2" />
                            </button>
                           ) : null}
                           {id ? (
                            <Link to={`/nominee-selection?id=${id}`} aria-label="Edit nomination">
                              <RxPencil1 className="h-10 w-10 text-black p-2" />
                            </Link>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {isModalVisible ? (
                        <Modal>
                            <h2 className='text-lg font-bold leading-[48px] mb-2 px-6'>
                                DELETE THIS NOMINATION
                            </h2>
                            <span className='font-anonymous leading-[30px] mb-10 px-6'>
                                If you delete this nomination, the nominee will
                                no longer be put forward by you.
                            </span>
                            <p className='text-error font-anonymous mb-6 pl-6'>
                                {deleteError}
                            </p>
                            <div className=''>
                                <button
                                    
                                    className='border-2 border-black text-black hover:border-pink hover:bg-gray-50 hover:shadow-[0px_1px_10px_0px_#1A1A1914] w-full mb-4 py-2'
                                    onClick={handleDelete}
                                >
                                    Yes, DELETE
                                </button>
                                <button
                                    
                                    onClick={closeModal}
                                    className='border-2 border-black text-black hover:border-pink hover:bg-gray-50 hover:shadow-[0px_1px_10px_0px_#1A1A1914] w-full mb-4 py-2'
                                >
                                    Cancel
                                </button>
                                </div>
                        </Modal>
                    ) : null}
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  );
};

export default Nomination;

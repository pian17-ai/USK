import { useCallback, useState } from "react";
import type { CandidatePayload, CandidateState } from "../types/candidate.type";
import { destroyCandidate, indexCandidate, showCandidate, storeCandidate, updateCandidate } from "../services/candidateService";

export default function useCandidate() {
    const [loading, setLoading] = useState(true);
    const [candidates, setCandidates] = useState<CandidateState[]>([]);
    const [candidate, setCandidate] = useState<CandidateState>();

    const getCandidates = useCallback( async() => {
        try {
            setLoading(true)

            const res = await indexCandidate();
            setCandidates(res.data.data!.candidates)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }, []);

    const getCandidate = useCallback( async(id: number | string) => {
        try {
            setLoading(true);
            const res = await showCandidate(id);
            setCandidate(res.data.data!.candidate);
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, []);

    const addCandidate = useCallback( async(payload: CandidatePayload) => {
        try {
            setLoading(true);
            await storeCandidate(payload);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const changeCandidate = useCallback( async(payload: CandidatePayload, id: number) => {
        try {
            setLoading(true);
            await updateCandidate(payload, id);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteCandidate = useCallback( async(id: number) => {
        try {
            setLoading(true);
            await destroyCandidate(id);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        candidates,
        candidate,
        getCandidates,
        getCandidate,
        addCandidate,
        changeCandidate,
        deleteCandidate
    }
}
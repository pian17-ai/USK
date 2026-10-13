import { useCallback, useState } from "react";
import {
  destroyScheme,
  indexScheme,
  showScheme,
  storeScheme,
  updateScheme,
} from "../services/schemeService";
import type { SchemePayload, SchemeState } from "../types/scheme.type";

export default function useScheme() {
  const [loading, setLoading] = useState(true);
  const [schemes, setSchemes] = useState<SchemeState[]>([]);
  const [scheme, setScheme] = useState<SchemeState>();
  const [message, setMessage] = useState("");

  const getSchemes = useCallback(async () => {
    try {
      setLoading(true);
      const res = await indexScheme();
      setSchemes(res.data.data!.schemes);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getScheme = useCallback(async (id: number | string) => {
    try {
      setLoading(true);
      const res = await showScheme(id);
      setScheme(res.data.data!.scheme);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addScheme = useCallback(async (payload: SchemePayload) => {
    try {
      setLoading(false);
      const res = await storeScheme(payload);
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(true);
    }
  }, []);

  const changeScheme = useCallback(
    async (payload: SchemePayload, id: number) => {
      try {
        setLoading(true);
        const res = await updateScheme(payload, id);
        setMessage(res.data.data.message);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const deleteScheme = useCallback(async (id: number) => {
    try {
      setLoading(true);
      const res = await destroyScheme(id);
      setMessage(res.data.data.message);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    schemes,
    scheme,
    message,
    getSchemes,
    getScheme,
    addScheme,
    changeScheme,
    deleteScheme,
  };
}

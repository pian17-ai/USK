import { useCallback, useState } from "react";
import {
  destroyUser,
  indexUser,
  showUser,
  storeUser,
  updateUser,
} from "../services/userService";
import type { UserState } from "../types/auth.type";
import type { UserPayload } from "../types/user.type";

export default function useUser() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<UserState[]>([]);
  const [user, setUser] = useState<UserState>();

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);

      const res = await indexUser();
      setUsers(res.data.data!.users);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const getUser = useCallback(async (id: number) => {
    try {
      setLoading(true);
      const res = await showUser(id);
      setUser(res.data.data!.user);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const addUser = useCallback(async (payload: UserPayload) => {
    try {
      setLoading(true);
      await storeUser(payload);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const changeUser = useCallback(async (payload: UserPayload, id: number) => {
    try {
      setLoading(true);
      await updateUser(payload, id);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteUser = useCallback(async (id: number) => {
    try {
      setLoading(true);
      destroyUser(id);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    users,
    user,
    getUsers,
    getUser,
    addUser,
    changeUser,
    deleteUser,
  };
}

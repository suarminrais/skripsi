import { useAuth } from "@/hooks/auth";
import { confirm } from "@/utils/alert";
import { perkembanganStatus } from "@/utils/status";
import React, { useState } from "react";
import { SelectLabel } from "../form/form.component";
import { Loader } from "../loader/loader.styles";
import { Button } from "../navbar/navbar.styles";
import { ProgramIcon } from "../program/program.styles";
import { ProgramTitle } from "../program/program.styles";
import { ProgramText } from "../program/program.styles";
import { ProgramType } from "../program/program.styles";
import { InvestationCardPreviewImage } from "./investation.styles";
import { InvestationCardInputContainer } from "./investation.styles";
import { InvestationCardColumn } from "./investation.styles";
import { InvestationCardDivider } from "./investation.styles";
import { InvestationCardInputHide } from "./investation.styles";
import { InvestationCardImage } from "./investation.styles";
import { InvestationCardRow } from "./investation.styles";
import { InvestationCardContainer } from "./investation.styles";

const InvestationCard = ({ onEdit, id, title, proveImage, image, type, location, periode, interest, funded, funding, status, total }) => {
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(false);
  const [_, setErrors] = useState([]);

  const { updateInvest, user, deleteProgram, editProgram } = useAuth({ middleware: 'auth' })

  const handleChangeFile = (e) => {
    setPreview(e.target.files[0]);
  };

  const onDelete = async () => {
    setLoading(true);
    confirm({
      title: 'Kamu yakin ?',
    }).then(async ({ isConfirmed }) => {
      if (isConfirmed)
        await deleteProgram({
          id,
        });
        setLoading(false);
    });
  }

  const handleClick = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', preview);
    formData.append('_method', 'put');
    await updateInvest({
      id,
      formData
    });
    setPreview(false);
    setLoading(false);
  }

  const handleChange = async (e) => {
    confirm({
      title: 'Kamu yakin ?',
      text: 'Data status progress akan diupdate!',
      confirmButtonText: 'Update'
    }).then( async({ isConfirmed }) => {
      if (isConfirmed){
        const formData = new FormData();
        formData.append('status', e.target.value);
        formData.append('_method', 'put');
        await editProgram({
          id,
          formData,
          setErrors,
        })
      }
    });
  }

  return (
    <InvestationCardContainer>
      <InvestationCardRow>
        <InvestationCardImage src={image} />
        <InvestationCardColumn evenly>
          <ProgramType mt uppercase>
            {type}
          </ProgramType>
          <ProgramTitle>{title}</ProgramTitle>
          <InvestationCardRow nogap>
            <ProgramIcon src="/map.png" />
            <ProgramType mb>{location}</ProgramType>
          </InvestationCardRow>
        </InvestationCardColumn>
      </InvestationCardRow>
      <InvestationCardDivider />
      <InvestationCardRow>
        <InvestationCardColumn>
          <ProgramType>Lama Periode</ProgramType>
          <ProgramText>{periode}</ProgramText>
        </InvestationCardColumn>
        <InvestationCardColumn>
          <ProgramType>Bunga</ProgramType>
          <ProgramText>{interest}</ProgramText>
        </InvestationCardColumn>
        <InvestationCardColumn>
          <ProgramType>Status Perkembangan</ProgramType>
          <ProgramText>{perkembanganStatus(status)}</ProgramText>
        </InvestationCardColumn>
      </InvestationCardRow>
      <InvestationCardRow>
        <InvestationCardColumn>
          <ProgramType>Total Investasi</ProgramType>
          <ProgramText>
            Rp. {funded} dari Rp. {funding}
          </ProgramText>
        </InvestationCardColumn>
        <InvestationCardColumn>
          {
            (user?.type === 'petani' && (status === '1' || status === '5')) && (
              <>
              <a onClick={() => onEdit(id)} class='btn btn-warning mb-1'>Edit</a><a onClick={() => onDelete(id)} class='btn btn-danger'>{loading ? <Loader /> : 'Hapus'}</a>
              </>
            )
          }
          {
            (user?.type === 'petani' && (status !== '1' && status !== '5' && status !== '4')) && (
              <>
              <SelectLabel onChange={handleChange} label="Update Progress">
                <option disabled selected>Pilih Progress</option>
                <option value="3">Program Dalam Masa Panen</option>
                <option value="4">Program Selesai</option>
              </SelectLabel>
              </>
            )
          }
        </InvestationCardColumn>
      </InvestationCardRow>
      {total && (
        <InvestationCardRow>
          <InvestationCardColumn>
            <ProgramType>Jumlah Bayar</ProgramType>
            <ProgramText>Rp. {total},-</ProgramText>
          </InvestationCardColumn>
          <InvestationCardColumn>
            {proveImage && <InvestationCardPreviewImage src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/images/${proveImage}`} />}
            {preview && <InvestationCardPreviewImage src={URL.createObjectURL(preview)} />}
            <InvestationCardInputContainer>
              <ProgramType>Upload bukti di sini</ProgramType>
              <InvestationCardInputHide type="file" accept="image/*" onChange={handleChangeFile} />
            </InvestationCardInputContainer>
          </InvestationCardColumn>
          <Button onClick={handleClick}>{loading ? <Loader /> : 'Upload'}</Button>
        </InvestationCardRow>
      )}
    </InvestationCardContainer>
  );
};

export default InvestationCard;
